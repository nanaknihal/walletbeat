import type { CorporateEntity, WalletDeveloper } from '@/schema/entity'

export const humantech: CorporateEntity & WalletDeveloper = {
	id: 'humantech',
	name: 'Human.Tech',
	legalName: { name: 'Holonym Foundation', soundsDifferent: true },
	type: {
		chainDataProvider: false,
		corporate: true,
		dataBroker: false,
		exchange: false,
		offchainDataProvider: false,
		securityAuditor: false,
		transactionBroadcastProvider: false,
		walletDeveloper: true,
	},
	crunchbase: 'https://www.crunchbase.com/organization/holonym',
	farcaster: { type: 'NO_FARCASTER_PROFILE' },
	icon: {
		extension: 'svg',
	},
	jurisdiction: 'USA',
	linkedin: 'https://www.linkedin.com/company/holonym',
	privacyPolicy: 'https://human.tech/policy',
	repoUrl: 'https://github.com/nufi-official/nufi',
	twitter: 'https://x.com/humntech',
	url: 'https://human.tech',
}
