// Mock API for blockchain validator data

export interface ValidatorSummary {
  uptime: string
  votingPower: number
  delegators: number
  totalStaked: string
  commission: string
  status: 'active' | 'jailed' | 'tombstoned'
}

export interface Node {
  id: string
  name: string
  uptime: string
  votingPower: number
  delegators: number
  status: 'active' | 'jailed' | 'tombstoned'
  commission: string
  lastSeen: string
  network: string
}

export interface PerformanceData {
  time: string
  uptime: number
  votingPower: number
  delegators: number
}

export interface Network {
  id: string
  name: string
  type: 'mainnet' | 'testnet'
  status: 'active' | 'inactive'
  validators: number
  totalStaked: string
  blockHeight: number
  blockTime: string
}

export interface ValidatorData {
  summary: ValidatorSummary
  nodes: Node[]
  performance: PerformanceData[]
  networks: Network[]
}

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchValidatorData(): Promise<ValidatorData> {
  await delay(1000) // Simulate network delay
  
  try {
    const data: ValidatorData = {
      summary: {
        uptime: "99.8%",
        votingPower: 1234567,
        delegators: 892,
        totalStaked: "45.2M ATOM",
        commission: "5%",
        status: "active"
      },
      nodes: [
        {
          id: "cosmosvaloper1abc123",
          name: "Cosmos Hub Validator",
          uptime: "99.9%",
          votingPower: 500000,
          delegators: 234,
          status: "active",
          commission: "5%",
          lastSeen: "2 minutes ago",
          network: "Cosmos Hub"
        },
        {
          id: "osmovaloper1def456",
          name: "Osmosis Validator",
          uptime: "98.5%",
          votingPower: 300000,
          delegators: 189,
          status: "active",
          commission: "7%",
          lastSeen: "1 minute ago",
          network: "Osmosis"
        },
        {
          id: "junovaloper1ghi789",
          name: "Juno Validator",
          uptime: "97.2%",
          votingPower: 234567,
          delegators: 156,
          status: "jailed",
          commission: "8%",
          lastSeen: "15 minutes ago",
          network: "Juno"
        },
        {
          id: "akashvaloper1jkl012",
          name: "Akash Validator",
          uptime: "99.1%",
          votingPower: 200000,
          delegators: 313,
          status: "active",
          commission: "6%",
          lastSeen: "30 seconds ago",
          network: "Akash"
        }
      ],
      performance: [
        { time: "00:00", uptime: 99.5, votingPower: 1200000, delegators: 850 },
        { time: "04:00", uptime: 99.7, votingPower: 1210000, delegators: 860 },
        { time: "08:00", uptime: 99.8, votingPower: 1220000, delegators: 870 },
        { time: "12:00", uptime: 99.6, votingPower: 1230000, delegators: 880 },
        { time: "16:00", uptime: 99.9, votingPower: 1234567, delegators: 892 },
        { time: "20:00", uptime: 99.8, votingPower: 1240000, delegators: 900 }
      ],
      networks: [
        {
          id: "cosmoshub-4",
          name: "Cosmos Hub",
          type: "mainnet",
          status: "active",
          validators: 175,
          totalStaked: "245.6M ATOM",
          blockHeight: 18234567,
          blockTime: "6.8s"
        },
        {
          id: "osmosis-1",
          name: "Osmosis",
          type: "mainnet",
          status: "active",
          validators: 150,
          totalStaked: "156.3M OSMO",
          blockHeight: 12456789,
          blockTime: "5.2s"
        },
        {
          id: "juno-1",
          name: "Juno",
          type: "mainnet",
          status: "active",
          validators: 125,
          totalStaked: "89.4M JUNO",
          blockHeight: 9876543,
          blockTime: "6.1s"
        },
        {
          id: "theta-testnet-001",
          name: "Cosmos Hub Testnet",
          type: "testnet",
          status: "active",
          validators: 50,
          totalStaked: "12.3M ATOM",
          blockHeight: 5432109,
          blockTime: "6.5s"
        }
      ]
    }
    
    return data
  } catch (error) {
    throw new Error("Failed to fetch validator data")
  }
}

export async function fetchNetworkData(): Promise<Network[]> {
  await delay(800)
  
  const data = await fetchValidatorData()
  return data.networks
}

export async function fetchSnapshotData() {
  await delay(600)
  
  return {
    snapshots: [
      {
        network: "Cosmos Hub",
        height: 18234567,
        size: "2.3 GB",
        date: "2024-01-15",
        downloadUrl: "#"
      },
      {
        network: "Osmosis",
        height: 12456789,
        size: "1.8 GB",
        date: "2024-01-15",
        downloadUrl: "#"
      },
      {
        network: "Juno",
        height: 9876543,
        size: "1.2 GB",
        date: "2024-01-15",
        downloadUrl: "#"
      }
    ]
  }
}
