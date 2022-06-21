import { defineConfig } from 'histoire'
import { defaultColors } from 'histoire'
export default defineConfig({
    setupFile: 'histoire.setup.ts',
    theme:{
     colors:{
        // gray:defaultColors.slate,
        primary:defaultColors.indigo
     }
    }
})