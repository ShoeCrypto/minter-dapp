require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Edgy Gainers NFT";
const description = "Edgy Gainers NFT is a project designed to share the gains with the community";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 250,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Bear Layer 1" },
      { name: "Bear Layer 2" },
      { name: "Bear Layer 3" },
      { name: "Bear Layer 4" },
      { name: "Bear Layer 5" },
      { name: "Bear Layer 6" },
      { name: "Bear Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Camel Layer 1" },
      { name: "Camel Layer 2" },
      { name: "Camel Layer 3" },
      { name: "Camel Layer 4" },
      { name: "Camel Layer 5" },
      { name: "Camel Layer 6" },
      { name: "Camel Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 750,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Deer Layer 1" },
      { name: "Deer Layer 2" },
      { name: "Deer Layer 3" },
      { name: "Deer Layer 4" },
      { name: "Deer Layer 5" },
      { name: "Deer Layer 6" },
      { name: "Deer Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Dolphin Layer 1" },
      { name: "Dolphin Layer 2" },
      { name: "Dolphin Layer 3" },
      { name: "Dolphin Layer 4" },
      { name: "Dolphin Layer 5" },
      { name: "Dolphin Layer 6" },
      { name: "Dolphin Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 1250,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Elephant Layer 1" },
      { name: "Elephant Layer 2" },
      { name: "Elephant Layer 3" },
      { name: "Elephant Layer 4" },
      { name: "Elephant Layer 5" },
      { name: "Elephant Layer 6" },
      { name: "Elephant Layer 7" },
      { name: "Elephant Layer 8" },
    ],
  },
  {
    growEditionSizeTo: 1500,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Flamingo Layer 1" },
      { name: "Flamingo Layer 2" },
      { name: "Flamingo Layer 3" },
      { name: "Flamingo Layer 4" },
      { name: "Flamingo Layer 5" },
      { name: "Flamingo Layer 6" },
      { name: "Flamingo Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 1750,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Fox Layer 1" },
      { name: "Fox Layer 2" },
      { name: "Fox Layer 3" },
      { name: "Fox Layer 4" },
      { name: "Fox Layer 5" },
      { name: "Fox Layer 6" },
      { name: "Fox Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Horse Layer 1" },
      { name: "Horse Layer 2" },
      { name: "Horse Layer 3" },
      { name: "Horse Layer 4" },
      { name: "Horse Layer 5" },
      { name: "Horse Layer 6" },
      { name: "Horse Layer 7" },
      { name: "Horse Layer 8" },
    ],
  },
  {
    growEditionSizeTo: 2250,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Koala Layer 1" },
      { name: "Koala Layer 2" },
      { name: "Koala Layer 3" },
      { name: "Koala Layer 4" },
      { name: "Koala Layer 5" },
      { name: "Koala Layer 6" },
      { name: "Koala Layer 7" },
      { name: "Koala Layer 8" },
      { name: "Koala Tree 1" },
      { name: "Koala Tree 2" },
      { name: "Koala Tree 3" },
    ],
  },
  {
    growEditionSizeTo: 2500,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Monkey Layer 1" },
      { name: "Monkey Layer 2" },
      { name: "Monkey Layer 3" },
      { name: "Monkey Layer 4" },
      { name: "Monkey Layer 5" },
      { name: "Monkey Layer 6" },
      { name: "Monkey Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 2750,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Owl Layer 1" },
      { name: "Owl Layer 2" },
      { name: "Owl Layer 3" },
      { name: "Owl Layer 4" },
      { name: "Owl Layer 5" },
      { name: "Owl Layer 6" },
    ],
  },
  {
    growEditionSizeTo: 3000,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Penguin Layer 1" },
      { name: "Penguin Layer 2" },
      { name: "Penguin Layer 3" },
      { name: "Penguin Layer 4" },
      { name: "Penguin Layer 5" },
      { name: "Penguin Layer 6" },
      { name: "Penguin Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 3250,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Rhino Layer 1" },
      { name: "Rhino Layer 2" },
      { name: "Rhino Layer 3" },
      { name: "Rhino Layer 4" },
      { name: "Rhino Layer 5" },
      { name: "Rhino Layer 6" },
      { name: "Rhino Layer 7" },
      { name: "Rhino Layer 8" },
    ],
  },
  {
    growEditionSizeTo: 3500,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Sea Turtle Layer 1" },
      { name: "Sea Turtle Layer 2" },
      { name: "Sea Turtle Layer 3" },
      { name: "Sea Turtle Layer 4" },
      { name: "Sea Turtle Layer 5" },
      { name: "Sea Turtle Layer 6" },
      { name: "Sea Turtle Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 3750,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Seahorse Layer 1" },
      { name: "Seahorse Layer 2" },
      { name: "Seahorse Layer 3" },
      { name: "Seahorse Layer 4" },
      { name: "Seahorse Layer 5" },
      { name: "Seahorse Layer 6" },
      { name: "Seahorse Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 4000,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Shark Layer 1" },
      { name: "Shark Layer 2" },
      { name: "Shark Layer 3" },
      { name: "Shark Layer 4" },
      { name: "Shark Layer 5" },
      { name: "Shark Layer 6" },
      { name: "Shark Layer 7" },
      { name: "Shark Layer 8" },
    ],
  },
  {
    growEditionSizeTo: 4250,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Squid Layer 1" },
      { name: "Squid Layer 2" },
      { name: "Squid Layer 3" },
      { name: "Squid Layer 4" },
      { name: "Squid Layer 5" },
      { name: "Squid Layer 6" },
      { name: "Squid Layer 7" },
      { name: "Squid Layer 8" },
    ],
  },
  {
    growEditionSizeTo: 4500,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Swan Layer 1" },
      { name: "Swan Layer 2" },
      { name: "Swan Layer 3" },
      { name: "Swan Layer 4" },
      { name: "Swan Layer 5" },
      { name: "Swan Layer 6" },
      { name: "Swan Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 4750,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Whale Layer 1" },
      { name: "Whale Layer 2" },
      { name: "Whale Layer 3" },
      { name: "Whale Layer 4" },
      { name: "Whale Layer 5" },
      { name: "Whale Layer 6" },
      { name: "Whale Layer 7" },
    ],
  },
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 Shiny Sphere" },
      { name: "3 Luminous Sphere" },
      { name: "4 Lucent Sphere" },
      { name: "5 Vivid Sphere" },
      { name: "6 Aglow Sphere" },
      { name: "8 Shine" },
      { name: "Wolf Layer 1" },
      { name: "Wolf Layer 2" },
      { name: "Wolf Layer 3" },
      { name: "Wolf Layer 4" },
      { name: "Wolf Layer 5" },
      { name: "Wolf Layer 6" },
      { name: "Wolf Layer 7" },
    ],
    },  
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://edgygainers.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'CRYPTOPUNKS';
const CONTRACT_SYMBOL = 'CP';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = 'YOUR WALLET ADDRESS HERE';
const TREASURY_ADDRESS = 'YOUR WALLET ADDRESS HERE';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 1; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-03-20T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xd8B808A887326F45B2D0cd999709Aa6264CeF919"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "REPLACE THIS"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
