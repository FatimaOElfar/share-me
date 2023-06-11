import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      REACT_APP_GOOGLE_API_TOKEN:
        "958283039356-r40n1cle275igvcnag28gua3as84m4q3.apps.googleusercontent.com ",
      REACT_APP_SANITY_PROJECT_ID: "a0v31t6a",
      REACT_APP_SANITY_TOKEN:
        "skDJO5yIOgg4uv0o6nOIRYZWslrmY9HQpgaCxfbVqfyyg8BrrYgXIbQjZK1bl3AJyt3EEDJ2KcDoAnpxkoZVye9CPFovnl51bbojOZfrlMz4OmdUsspqy9AIdeuOBI667vPc3BPou7rkOVSx9tDBmiyk2BWGAiJGS9BzNqPmwF13ofjMlaaR",
    },
  },
})
