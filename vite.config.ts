import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    root: resolve(__dirname, 'src'),
    server: {
        port: 8080,
        hot: true
    }
}
