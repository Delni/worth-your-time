import { writable } from 'svelte/store'

type Prompt = {
    weekly: number
    target: number
}
export const prompt = writable<Prompt>({ weekly: 0, target: 0 })
