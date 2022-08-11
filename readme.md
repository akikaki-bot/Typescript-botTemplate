## Typescriptをあがめよ

### 最初にやろう

```
npm i discord.js ts-node typescript
```

### うごかそう

～序章～

> main.ts
```ts
import { Bot } from './'

new Bot().run(token) // <-とけんいれる
```

～最終章～

```
npx ts-node main.ts
```

### コマンドを追加しよう

```ts
import { Command } from '../lib'

const command : Command = {
    data: {
        name: "command",
        description: "this is command"
    },

    async execute(interaction){
        interaction.reply('KFC')
    }
}
```
