import en from '@/language/en.ts'
import zh from '@/language/zh.ts'
import { createI18n } from 'vue-i18n'

// 使用 createI18n 函数创建一个国际化实例
const i18n = createI18n({
  // 禁用 legacy 模式，使用 Composition API
  legacy: false,
  // 定义语言消息，包含英文和中文
  messages: {
    // 导入的英文语言文件
    en,
    // 导入的中文语言文件
    zh,
  },
  // 设置默认语言为英文
  locale: 'en',
})

export default i18n
