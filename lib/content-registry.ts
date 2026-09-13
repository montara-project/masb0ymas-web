import type { ComponentType } from 'react'

import bagaimanaCaraSetupGitDanGithubPadaLocalDevice from '@/content/blog/bagaimana-cara-setup-git-dan-github-pada-local-device.mdx'
import creatingASimpleNftSmartContractWithSolidityAndHardhat from '@/content/blog/creating-a-simple-nft-smart-contract-with-solidity-and-hardhat.mdx'
import howDoYouImplementAnNftSmartContractWithRemixAndPublishItOnOpenSea from '@/content/blog/how-do-you-implement-an-nft-smart-contract-with-remix-and-publish-it-on-open-sea.mdx'
import howToDumpAndRestoreAPostgresDatabaseFromADockerContainer from '@/content/blog/how-to-dump-and-restore-a-postgres-database-from-a-docker-container.mdx'
import howToInstallReactNativeOnDifferentPlatforms from '@/content/blog/how-to-install-react-native-on-different-platforms.mdx'
import howToReleaseAVersionOfAWebAppUsingGithubWorkflowWithGithubActions from '@/content/blog/how-to-release-a-version-of-a-web-app-using-github-workflow-with-github-actions.mdx'
import howToUseEnvironmentVariablesInSveltekit from '@/content/blog/how-to-use-environment-variables-in-sveltekit.mdx'
import howToUseGithubActionForCiCdAndPushToGoogleArtifactRegistry from '@/content/blog/how-to-use-github-action-for-ci-cd-and-push-to-google-artifact-registry.mdx'
import howToUseTraefikProxyWithDockerCompose from '@/content/blog/how-to-use-traefik-proxy-with-docker-compose.mdx'
import whyIUseSemanticVersioning from '@/content/blog/why-i-use-semantic-versioning.mdx'
import arifAnalytics from '@/content/projects/arif-analytics.mdx'
import boatwork from '@/content/projects/boatwork.mdx'
import defiCalculator from '@/content/projects/defi-calculator.mdx'
import kickstarter from '@/content/projects/kickstarter.mdx'
import moneyflowId from '@/content/projects/moneyflow-id.mdx'
import seadev from '@/content/projects/seadev.mdx'
import webProgrammingHack from '@/content/projects/web-programming-hack.mdx'

/** Compiled MDX bodies keyed by slug; metadata lives in lib/blog-data & lib/project-data. */
export const BLOG_CONTENT: Record<string, ComponentType> = {
  'bagaimana-cara-setup-git-dan-github-pada-local-device':
    bagaimanaCaraSetupGitDanGithubPadaLocalDevice,
  'how-to-use-github-action-for-ci-cd-and-push-to-google-artifact-registry':
    howToUseGithubActionForCiCdAndPushToGoogleArtifactRegistry,
  'how-to-install-react-native-on-different-platforms': howToInstallReactNativeOnDifferentPlatforms,
  'how-to-use-environment-variables-in-sveltekit': howToUseEnvironmentVariablesInSveltekit,
  'how-to-dump-and-restore-a-postgres-database-from-a-docker-container':
    howToDumpAndRestoreAPostgresDatabaseFromADockerContainer,
  'how-do-you-implement-an-nft-smart-contract-with-remix-and-publish-it-on-open-sea':
    howDoYouImplementAnNftSmartContractWithRemixAndPublishItOnOpenSea,
  'creating-a-simple-nft-smart-contract-with-solidity-and-hardhat':
    creatingASimpleNftSmartContractWithSolidityAndHardhat,
  'how-to-use-traefik-proxy-with-docker-compose': howToUseTraefikProxyWithDockerCompose,
  'why-i-use-semantic-versioning': whyIUseSemanticVersioning,
  'how-to-release-a-version-of-a-web-app-using-github-workflow-with-github-actions':
    howToReleaseAVersionOfAWebAppUsingGithubWorkflowWithGithubActions,
}

export const PROJECT_CONTENT: Record<string, ComponentType> = {
  'web-programming-hack': webProgrammingHack,
  seadev,
  boatwork,
  'moneyflow-id': moneyflowId,
  'arif-analytics': arifAnalytics,
  'defi-calculator': defiCalculator,
  kickstarter,
}
