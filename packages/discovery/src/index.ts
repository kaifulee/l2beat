export { discover } from './cli/discoverCommand'
export { modelPermissionsCommand } from './cli/modelPermissionsCommand'
export { colorize } from './discovery/colorize/colorize'
export {
  DiscoveryRegistry,
  type DiscoveryBlockNumbers,
  getDependenciesToDiscoverForProject,
  modelPermissions,
  generateClingoForDiscoveries,
  generatePermissionConfigHash,
} from './discovery/modelling/modelPermissions'
export { saveDiscoveredJson } from './discovery/output/saveDiscoveryResult'
export { combinePermissionsIntoDiscovery } from './discovery/modelling/combinePermissionsIntoDiscovery'
export {
  getChainConfig,
  getChainShortName,
  isChainShortName,
  getChainConfigs,
  getChainFullName,
} from './config/config.discovery'
export type {
  DiscoveryChainConfig,
  DiscoveryModuleConfig,
} from './config/types'
export { getDiscoveryEngine } from './discovery/getDiscoveryEngine'
export {
  AddressAnalyzer,
  type Analysis,
} from './discovery/analysis/AddressAnalyzer'
export { TemplateService } from './discovery/analysis/TemplateService'
export { ConfigReader } from './discovery/config/ConfigReader'
export { ConfigRegistry } from './discovery/config/ConfigRegistry'
export {
  Permission,
  BasePermissionEntries,
  RolePermissionEntries,
} from './discovery/config/PermissionConfig'
export type { DiscoveryConfig } from './discovery/config/ConfigSchema'
export { getContractField } from './discovery/utils/metaGetters'
export { DiscoveryEngine } from './discovery/engine/DiscoveryEngine'
export { flattenDiscoveredSources } from './discovery/output/flattenDiscoveredSource'
export { HandlerExecutor } from './discovery/handlers/HandlerExecutor'
export { diffContracts, type FieldDiff } from './discovery/output/diffContracts'
export { neuterErrors } from './discovery/output/errors'
export { hashJsonStable } from './discovery/config/hashJsonStable'
export {
  diffDiscovery,
  type DiscoveryDiff,
} from './discovery/output/diffDiscovery'
export {
  contractDiffToMarkdown,
  discoveryDiffToMarkdown,
} from './discovery/output/diffToMarkdown'
export {
  toDiscoveryOutput,
  toRawDiscoveryOutput,
} from './discovery/output/toDiscoveryOutput'
export { MulticallClient } from './discovery/provider/multicall/MulticallClient'
export { getMulticall3Config } from './discovery/provider/multicall/MulticallConfig'
export type { MulticallConfig } from './discovery/provider/multicall/types'
export { RateLimitedProvider } from './discovery/provider/RateLimitedProvider'
export { ProxyDetector } from './discovery/proxies/ProxyDetector'
export { deduplicateAbi } from './discovery/source/deduplicateAbi'
export { SourceCodeService } from './discovery/source/SourceCodeService'
export { normalizeDiffPath } from './discovery/utils/normalizeDiffPath'
export { sortBySeverity } from './discovery/utils/sortDiffs'
export type { HashedChunks, HashedFileContent } from './flatten/utils'
export { type DiscoveryCache } from './discovery/provider/DiscoveryCache'
export { InMemoryCache } from './discovery/provider/InMemoryCache'
export { LeveledCache } from './discovery/provider/LeveledCache'
export { SQLiteCache } from './discovery/provider/SQLiteCache'
export { NoCache } from './discovery/provider/NoCache'
export {
  buildSimilarityHashmap,
  estimateSimilarity,
  flatteningHash,
  combineImplementationHashes,
  getHashToBeMatched,
} from './flatten/utils'
export {
  type StructureContractConfig as ContractConfig,
  makeEntryStructureConfig,
} from './discovery/config/structureUtils'
export {
  type ExplorerConfig,
  type IEtherscanClient,
  getExplorerClient,
} from './utils/IEtherscanClient'
export { EtherscanClient } from './utils/EtherscanClient'
export { getErrorMessage } from './utils/getErrorMessage'
export { AllProviders } from './discovery/provider/AllProviders'
export type { IProvider } from './discovery/provider/IProvider'
export { ParsedFilesManager } from './flatten/ParsedFilesManager'
export { flattenStartingFrom } from './flatten/flatten'
export { format } from './flatten/format'
export { DiscoverCommandArgs } from './cli/discoverCommand'
export {
  ProviderStats,
  type AllProviderStats,
  ProviderMeasurement,
} from './discovery/provider/Stats'
export { KnowledgeBase } from './discovery/modelling/KnowledgeBase'
export {
  type ClingoFact,
  type ClingoValue,
} from './discovery/modelling/clingoparser'
export type {
  DiscoveryOutput,
  EntryParameters,
  ReceivedPermission,
  ResolvedPermissionPath,
  ContractValue,
} from './discovery/output/types'
export { get$Implementations } from './discovery/utils/extractors'
export { ModelIdRegistry } from './discovery/modelling/ModelIdRegistry'
export {
  getDiscoveryPaths,
  type DiscoveryPaths,
} from './discovery/config/getDiscoveryPaths'
export { combineStructureAndColor } from './discovery/output/toDiscoveryOutput'
export { makeEntryColorConfig } from './discovery/config/colorUtils'
export { getShapeFromOutputEntry } from './discovery/analysis/findShape'
export { readJsonc } from './discovery/utils/readJsonc'
export { toPrettyJson } from './discovery/output/toPrettyJson'
export { codeIsEOA } from './discovery/analysis/codeIsEOA'
