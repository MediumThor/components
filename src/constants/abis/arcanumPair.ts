import { Interface } from '@ethersproject/abi'
import { abi as IArcanumPairABI } from '@arcanumdex/exchange-contracts/artifacts/contracts/arcanum-core/interfaces/IArcanumPair.sol/IArcanumPair.json'

const PANGOLIN_PAIR_INTERFACE = new Interface(IArcanumPairABI)

export { PANGOLIN_PAIR_INTERFACE }
