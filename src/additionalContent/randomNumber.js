const getRandomNumber = (min, max) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    return Math.round(Math.random()*(maxValue - minValue) + minValue)
};

export default getRandomNumber;
