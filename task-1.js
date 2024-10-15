function slugify(title) {
  title = title.trim().toLowerCase();
  const slug = title.split(" ").join("-");

  return slug;
}
