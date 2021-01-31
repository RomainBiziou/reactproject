export const themes = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Culture Generale" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Histoire" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Geographie" }
];

export function getThemes() {
  return themes.filter(t => t);
}
