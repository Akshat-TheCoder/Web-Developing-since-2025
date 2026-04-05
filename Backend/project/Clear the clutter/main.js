import fs from "fs/promises"
import fsm from "fs"
import path from "path"

const basepath = "C:\\Users\\Lenovo\\OneDrive\\Desktop\\web dev\\Web-Developing-since-2025\\Backend\\project\\Clear the clutter"

let folder = await fs.readdir(basepath)

function re() {
    for (const file of folder) {
        let ext = file.split(".")[file.split(".").length - 1]
        if (ext != "js" && ext != "json" && file.split(".").length > 1) {
            Ifr(file, ext)
        }
    }
}

function Ifr(x, y) {
    if (fsm.existsSync(path.join(basepath, y))) {
        fs.rename(path.join(basepath, x), path.join(basepath, y, x))
    }
    else {
        fs.mkdir(y)
        re()
    }
}

re()