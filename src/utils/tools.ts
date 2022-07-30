const fadeInAndOut = (target: HTMLElement, type: "in" | "out", delay: number): void => {
    if (type !== "in" && type !== "out" && !target && (typeof delay) !== "number") {
        throw new Error("请传入正确的参数！")
    }
    if (type === "in") {
        target.style.display = "block"
        setTimeout(() => {
            target.style.opacity = "1"
        }, delay)
    }

    if (type === "out") {
        target.style.opacity = "0"
        setTimeout(() => {
            target.style.display = "none"
        }, delay)
    }
}

const isObjectEmpty = (obj: {}): boolean => {
    return JSON.stringify(obj) === "{}"
}

export { fadeInAndOut, isObjectEmpty }
