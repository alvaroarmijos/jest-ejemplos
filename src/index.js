const cities = ['Ciudad de Mexico', 'Bogota', 'Lima', 'Guadalajara', 'Buenos Aires'];

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
};

module.exports = randomString;