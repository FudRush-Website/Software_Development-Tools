function getImgUrl(name) {
    return new URL(`../assets/restaurants/${name}`, import.meta.url)
}

export {getImgUrl}