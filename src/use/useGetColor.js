export function useGetColor(category) {
  let color;
  switch (category) {
    case "wszystkie":
      color = "116, 57, 253";
      break;
    case "rodzinne":
      color = "3, 218, 198";
      break;
    case "imprezowe":
      color = "187, 134, 252";
      break;
    case "strategiczne":
      color = "218, 186, 3";
      break;
    default:
      color = "70, 70, 70";
  }
  return [`rgba(${color}, 0.25)`, `rgb(${color})`];
}
