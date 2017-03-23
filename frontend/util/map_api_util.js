export const fetchMapCenter = (city) => {
  return $.ajax ({
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyB5-TwrDiShW9sNwnpfXQEtr0hfVuwS_2w`
  });
};
