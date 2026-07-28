export function validateKnowledgeAsset(data: any) {
  if (!data.title?.trim()) {
    return "Tajuk aset diperlukan.";
  }

  if (!data.category?.trim()) {
    return "Kategori diperlukan.";
  }

  return null;
}