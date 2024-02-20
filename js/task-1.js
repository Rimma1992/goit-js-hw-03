function slugify(title) {
  let firstStep = title.toLowerCase();
  let secondStep = firstStep.split(" ");
  let result = secondStep.join("-");
  return result;
}