for (let i = 0; i < arrObj.length; i++) {
  let tempObj = arrObj[i];
  for (let j = i + 1; j < arrObj.length; j++) {
    if (tempObj.id === arrObj[j].id) {
      tempObj = { ...tempObj, ...arrObj[j] };
      arrObj[i] = tempObj;
      arrObj.splice(j, 1);
      j--;
    }
  }
}
