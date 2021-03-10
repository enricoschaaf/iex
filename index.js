import { start } from "repl"
import { add } from "./add.js"

const repl = start()

repl.context.add = add
