// テーブル生成関数
function createAntibioticsTable(data) {
  const table = document.createElement("table");
  table.setAttribute("border", "1");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th colspan="3">分類</th>
      <th>一般名（略語）</th>
      <th>ASC</th>
      <th>ASI</th>
      <th>AWaRe分類</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  const categoriesMap = {};
  data.forEach((item) => {
    const mainCategory = item.categories[1];
    const subCategory = item.categories[2] || ""; // undefined の場合は空欄に
    const subSubCategory = item.categories[3] || ""; // undefined の場合は空欄に

    const drugNames = Array.isArray(item.name) ? item.name : [item.name];
    if (!categoriesMap[mainCategory]) {
      categoriesMap[mainCategory] = {};
    }
    if (!categoriesMap[mainCategory][subCategory]) {
      categoriesMap[mainCategory][subCategory] = {};
    }
    if (!categoriesMap[mainCategory][subCategory][subSubCategory]) {
      categoriesMap[mainCategory][subCategory][subSubCategory] = [];
    }
    categoriesMap[mainCategory][subCategory][subSubCategory].push(item);
  });

  Object.entries(categoriesMap).forEach(([mainCategory, subCategories]) => {
    const mainCategoryRowCount = Object.values(subCategories)
      .map((sub) => Object.values(sub).reduce((a, b) => a + b.length, 0))
      .reduce((a, b) => a + b, 0);

    Object.entries(subCategories).forEach(([subCategory, subSubCategories], subIndex) => {
      const subCategoryRowCount = Object.values(subSubCategories).reduce(
        (a, b) => a + b.length,
        0
      );

      Object.entries(subSubCategories).forEach(([subSubCategory, drugs], subSubIndex) => {
        drugs.forEach((drug, drugIndex) => {
          const row = document.createElement("tr");

          // Main Category Cell
          if (subIndex === 0 && subSubIndex === 0 && drugIndex === 0) {
            const mainCategoryCell = document.createElement("td");
            mainCategoryCell.setAttribute("rowspan", mainCategoryRowCount);
            mainCategoryCell.textContent = mainCategory;
            row.appendChild(mainCategoryCell);
          }

          // Sub Category Cell
          if (subSubIndex === 0 && drugIndex === 0) {
            const subCategoryCell = document.createElement("td");
            subCategoryCell.setAttribute("rowspan", subCategoryRowCount);
            subCategoryCell.textContent = subCategory;
            row.appendChild(subCategoryCell);
          }

          // Sub-Sub Category Cell
          if (drugIndex === 0) {
            const subSubCategoryCell = document.createElement("td");
            subSubCategoryCell.setAttribute("rowspan", drugs.length);
            subSubCategoryCell.textContent = subSubCategory;
            row.appendChild(subSubCategoryCell);
          }

          // Drug Cell
          const drugsCell = document.createElement("td");
          const drugName = drug.name?.[0] || "名称なし";
          const drugAbbreviation = drug.abbreviation?.[0] || "-";
          drugsCell.textContent = `${drugName} (${drugAbbreviation})`;
          row.appendChild(drugsCell);

          // ASC Cell
          const ascCell = document.createElement("td");
          ascCell.textContent = drug.asc?.[0] || "-";
          row.appendChild(ascCell);

          // ASI Cell
          const asiCell = document.createElement("td");
          asiCell.textContent = drug.asi?.[0] || "-";
          row.appendChild(asiCell);

          // AWaRe Cell
          const awareCell = document.createElement("td");
          awareCell.textContent = drug.aware?.[0] || "未分類";
          awareCell.classList.add(drug.aware?.[0] || "aware-default");
          row.appendChild(awareCell);          

          tbody.appendChild(row);
        });
      });
    });
  });

  table.appendChild(tbody);
  return table;
}

// 結果表示関数
function renderResults() {
  const results = document.getElementById("results");
  const selectedCategory = document.getElementById("category-select").value;
  const selectedView = document.getElementById("view-select").value;

  results.innerHTML = "";

  if (!selectedCategory) {
    const table = createAntibioticsTable(data);
    results.appendChild(table);
  } else if (selectedView === "vertical") {
    const filteredDrugs = selectedCategory
  ? data.filter(
      (drug) =>
        drug.categories.includes(selectedCategory) ||
        drug.specifiedCategories?.includes(selectedCategory)
    )
  : data;

// カテゴリ情報を取得
const categoryInfo = categoriesInfo[selectedCategory] || "情報がありません。";

// カテゴリ情報を縦型ビューの最初に追加
const infoSection = document.createElement("div");

infoSection.innerHTML = `<h2>${selectedCategory}</h2><p id="categoryInfo">${categoryInfo}</p>`;
results.appendChild(infoSection);  
    filteredDrugs.forEach((drug) => {
      // 各薬剤情報を囲む div を作成
      const container = document.createElement("div");
      container.classList.add("drug-container"); // 必要に応じてクラスを追加
      container.classList.add(drug.aware);

      const title = document.createElement("h3");
      title.textContent = drug.name[0];
      results.appendChild(title);

      const item = document.createElement("p");

      item.innerHTML = `
      <p><strong>英語名・略語:</strong> ${
  Array.isArray(drug.name) ? drug.name[1] || "英語名なし" : "英語名なし"
} | ${drug.abbreviation?.[0] || "-"} | ${
drug.abbreviation?.[1] || "-"
}</p>
      <p><strong>作用機序:</strong> ${drug.mechanism}</p>
      <p><strong>経路:</strong> ${drug.route.join(", ")}</p>
      <p><strong>分類:</strong> ${renderCategoryHierarchy(drug.categories)}</p>
      <p><strong>${drug.specifiedCategories.join(" / ")}</strong></p>
      <p><strong>主なスペクトラム:</strong> ${drug.spectrum.join(", ")}</p>

      <p><strong>主な特徴:</strong> ${drug.detail[0]}</p>
      <button class="show-more" data-name="${drug.name[0]}">詳細を見る</button>
      <p><strong>ASC:</strong> ${drug.asc}, <strong>ASI:</strong> ${drug.asi}, <strong>AWaRe分類</strong>: <span class="${drug.aware}">${drug.aware}</span></p>
      <p><strong>参考資料:</strong> ${
      drug.reference && drug.reference.length > 0
          ? `<ol>` +
          drug.reference
              .map(
              (ref, index) =>
                  `<li><a href="${drug.url[index] || '#'}" target="_blank">${ref}</a></li>`
              )
              .join("") +
          `</ol>`
          : "準備中"
      }</p>
      `;
      container.appendChild(item);

      // 結果エリアに追加
      results.appendChild(container);
      });
      
    document.querySelectorAll(".show-more").forEach((button) => {
      button.addEventListener("click", function () {
        const drugName = this.getAttribute("data-name");
        const drug = data.find((d) => d.name[0] === drugName);
        const parent = this.parentElement;
        const detailIndex = parent.querySelectorAll("div").length + 1;     

        if (drug.detail[detailIndex]) {
          const newDetail = document.createElement("div");
          newDetail.textContent = drug.detail[detailIndex];
          parent.insertBefore(newDetail, this);
        } else {
          this.textContent = "詳細はありません";
          this.disabled = true;
        }
      });
    });
  } else {
    const filteredDrugs = selectedCategory
  ? data.filter(
      (drug) =>
        drug.categories.includes(selectedCategory) ||
        drug.specifiedCategories?.includes(selectedCategory)
    )
  : data;


    const categoryInfo = categoriesInfo[selectedCategory] || "情報がありません。";
    const infoSection = document.createElement("div");
    infoSection.innerHTML = `<h2>${selectedCategory}</h2><p id="categoryInfo">${categoryInfo}</p>`;
    results.appendChild(infoSection);

    const table = createAntibioticsTable(filteredDrugs);
    results.appendChild(table);
  }
}

// ページロード時に全体テーブルを表示
window.addEventListener("DOMContentLoaded", renderResults);

// カテゴリ選択とビュー変更に応じた更新
document.getElementById("category-select").addEventListener("change", renderResults);
document.getElementById("view-select").addEventListener("change", renderResults);

// カテゴリ階層表示用関数
function renderCategoryHierarchy(categories) {
  return categories
    .slice(1)
    .map((category, index) => (index === 0 ? category : `　　　L ${category}`))
    .join("<br>");
}


