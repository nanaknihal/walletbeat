import type { Contributor } from '@/schema/wallet'

import { humantech } from '../entities/humantech'

export const exampleContributor: Contributor = {
	name: 'nanaknihal',
	affiliation: [
		{
			developer: humantech,
			hasEquity: true,
			role: 'FOUNDER',
		},
	],
}
