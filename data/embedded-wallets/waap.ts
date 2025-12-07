import { exampleContributor } from '@/data/contributors/example'
import { WalletProfile } from '@/schema/features/profile'
import { refTodo } from '@/schema/reference'
import { Variant } from '@/schema/variants'
import type { EmbeddedWallet } from '@/schema/wallet'
import { paragraph } from '@/types/content'

export const waapEmbeddedWallet: EmbeddedWallet = {
	metadata: {
		id: 'waap',
		displayName: 'WaaP',
		tableName: 'WaaP',
		blurb: paragraph(`
			A free, self-custodial, and secure alternative to WaaS. Instead of renting keys that only work on one application,
			WaaP uses social logins to create controller keys for free universal wallets. These wallets are composable
			across apps and have security mechanisms beyond just the social login factors. It is not only a B2B wallet but also a 
			B2C wallet that works anywhere.
		`),
		contributors: [exampleContributor],
		iconExtension: 'svg',
		lastUpdated: '2025-04-12',
		repoUrl: 'https://github.com/holonym-foundation/silk',
		url: 'https://waap.xyz',
	},
	features: {
		accountSupport: null,
		licensing: null,
		monetization: {
			ref: refTodo,
			revenueBreakdownIsPublic: false,
			strategies: {
				donations: null,
				ecosystemGrants: null,
				governanceTokenLowFloat: null,
				governanceTokenMostlyDistributed: null,
				hiddenConvenienceFees: null,
				publicOffering: null,
				selfFunded: null,
				transparentConvenienceFees: true,
				ventureCapital: true,
			},
		},
		multiAddress: null,
		privacy: {
			dataCollection: null,
			privacyPolicy: 'https://human.tech/policy',
			transactionPrivacy: null,
		},
		profile: WalletProfile.GENERIC,
		security: {
			bugBountyProgram: null,
			lightClient: {
				ethereumL1: null,
			},
			passkeyVerification: null,
			publicSecurityAudits: null,
		},
		selfSovereignty: {
			interoperability: true,
		},
		transparency: {
			operationFees: null,
		},
	},
	variants: {
		[Variant.EMBEDDED]: true,
	},
}
