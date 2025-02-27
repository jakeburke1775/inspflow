const portalAdd = "https://permitlookup.cityoforlando.net/WebPermits/";

function getDataElement(data) {
  const rowTemp = document.querySelector(".template");
  const rowElement = rowTemp.content
    .querySelector(".temp__row")
    .cloneNode(true);
  //lot
  const lotElement = rowElement.querySelector(".temp__lot");
  const lotLink = lotElement.querySelector(".lot-link");
  lotLink.onclick = function () {
    copyAndRedirect(data.perm);
  };
  //permit
  const permElement = rowElement.querySelector(".temp__perm");
  const permLink = permElement.querySelector(".perm-link");
  permLink.onclick = function () {
    copyAndRedirect(data.perm);
  };
  //address
  const addElement = rowElement.querySelector(".temp__add");
  const addLink = addElement.querySelector(".add-link");
  addLink.onclick = function () {
    copyAndRedirect(data.perm);
  };

  lotLink.textContent = data.lot;
  permLink.textContent = data.perm;
  addLink.textContent = data.address;

  if (data.lot % 2 === 0) {
    rowElement.classList.add("temp__row_gray");
  }

  return rowElement;
}

const table = document.querySelector(".data__table");

units.forEach((data) => {
  const rowElement = getDataElement(data);
  table.append(rowElement);
});
