import clsx from 'clsx'
import { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并多个类名并返回合并后的类名字符串
 * 该函数主要目的是简化类名的合并操作，特别是在React等前端框架中动态生成类名时非常有用
 * 它接受多个类名（包括字符串、对象、数组等）作为输入，并将它们合并成一个字符串
 *
 * @param inputs 多个类名输入，可以是字符串、对象或数组，代表不同的类名
 * @returns 返回合并后的类名字符串
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
