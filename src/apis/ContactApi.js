export const fetchContacts = () => {
  return fetch("http://localhost:3004/contact")
    .then((data) => data.json())
    .then((data) => {
      return data;
    });
};
