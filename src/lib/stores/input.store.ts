import { writable } from 'svelte/store';

type Prompt = {
	weekly?: number;
	target?: number;
};
export const prompt = writable<Prompt>({ weekly: undefined, target: undefined });
