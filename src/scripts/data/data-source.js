import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async homeResto() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async reviewResto(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DataSource;
