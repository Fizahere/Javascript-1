//using oop class

class EasyHttp {
  get(url) {
    return new Promise(function (resolve, reject) {
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          return resolve(data);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  }

  post(url, data) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          return resolve(data);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  }

  put(url, data) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        headers: {
          "Content-type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          return resolve(data);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  }

  patch(url, data) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        headers: {
          "Content-type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(data),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          return resolve(data);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  }

  delete(url) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: "DELETE",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          return resolve(data);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  }
}
