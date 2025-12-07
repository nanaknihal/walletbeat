import { rateWallet } from '@/schema/wallet'

import { unratedEmbeddedTemplate } from './embedded-wallets/unrated.tmpl'
import { waapEmbeddedWallet } from './embedded-wallets/waap'

/** Set of all known hardware wallets. */
export const embeddedWallets = {
	waap: waapEmbeddedWallet
}
/** A valid embedded wallet name. */
export type EmbeddedWalletName = keyof typeof embeddedWallets

/** Type predicate for HardwareWalletName. */
export function isValidEmbeddedWalletName(name: string): name is EmbeddedWalletName {
	return Object.prototype.hasOwnProperty.call(embeddedWallets, name)
}


/** The unrated embedded wallet as a rated wallet. */
export const unratedEmbeddedWallet = rateWallet(unratedEmbeddedTemplate)
// export const waapEmbeddedWallet = rateWallet(waapEmbeddedTemplate)
