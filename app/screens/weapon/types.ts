export interface WeaponType  {
    id: string,
    enabled: boolean,
    name: String,
    description: string,
    rarity: string,
    type: string,
    gameplayTags: [
        string,
    ],
    searchTags: string,
    images: {
        icon: string,
        background: string
    },
    mainStats: {
        DmgPB: number,
        FiringRate: number,
        ClipSize: number,
        ReloadTime: number,
        BulletsPerCartridge: number,
        Spread: number,
        SpreadDownsights: number,
        DamageZone_Critical: number
    }
}