import { rateWallet } from '@/schema/wallet'

import { unratedEmbeddedTemplate } from './embedded-wallets/unrated.tmpl'
import { waapEmbeddedTemplate } from './embedded-wallets/waap.tmpl'

/** The unrated embedded wallet as a rated wallet. */
export const unratedEmbeddedWallet = rateWallet(unratedEmbeddedTemplate)
export const waapEmbeddedWallet = rateWallet(waapEmbeddedTemplate)