export const getViewed = () => {
  return JSON.parse(
    localStorage.getItem("viewedNotifications") || "[]"
  );
};

export const markViewed = (id) => {
  const viewed = getViewed();

  if (!viewed.includes(id)) {
    viewed.push(id);

    localStorage.setItem(
      "viewedNotifications",
      JSON.stringify(viewed)
    );
  }
};