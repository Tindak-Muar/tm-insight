import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date();

type AssetSeed = {
  title:string;category:string;subcategory?:string;institution?:string;state?:string;
  year?:number;author?:string;summary?:string;content?:string;
  source?:string;sourceUrl?:string;sourceReference?:string;
  tags?:string;status?:"DRAFT"|"PUBLISHED"|"ARCHIVED";
};

const slugify=(t:string)=>t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-");

const createAsset=(a:AssetSeed)=>({
 title:a.title,slug:slugify(a.title),category:a.category,
 subcategory:a.subcategory??null,institution:a.institution??null,state:a.state??null,
 year:a.year??null,author:a.author??null,summary:a.summary??null,
 content:a.content??`Dokumen rujukan bagi "${a.title}".`,
 source:a.source??null,sourceUrl:a.sourceUrl??null,sourceReference:a.sourceReference??null,
 tags:a.tags??null,status:a.status??"DRAFT",version:1,
 publishedAt:(a.status??"DRAFT")==="PUBLISHED"?now:null,
 publishedBy:(a.status??"DRAFT")==="PUBLISHED"?"Seeder":null,
 archivedAt:(a.status??"DRAFT")==="ARCHIVED"?now:null,
 archivedBy:(a.status??"DRAFT")==="ARCHIVED"?"Seeder":null,
 filePath:null
});

const assets:AssetSeed[]=[
{title:"Manifesto Johor Maju 2030",category:"Manifesto",institution:"Kerajaan Negeri Johor",state:"Johor",year:2026,author:"UPEN Johor",summary:"Manifesto",source:"Portal Johor",sourceUrl:"https://www.johor.gov.my",tags:"manifesto",status:"PUBLISHED"},
{title:"Belanjawan Johor 2026",category:"Belanjawan",institution:"Perbendaharaan Johor",state:"Johor",year:2026,author:"Kerajaan Johor",summary:"Belanjawan",source:"Portal Johor",sourceUrl:"https://www.johor.gov.my",tags:"belanjawan",status:"PUBLISHED"},
{title:"Statistik Kemiskinan Johor 2025",category:"Statistik",institution:"DOSM",state:"Johor",year:2025,author:"DOSM",summary:"Kemiskinan",source:"DOSM",sourceUrl:"https://www.dosm.gov.my",tags:"dosm",status:"DRAFT"},
{title:"Laporan Audit Negara 2024",category:"Laporan",institution:"Jabatan Audit Negara",state:"Malaysia",year:2024,author:"JAN",summary:"Audit",source:"JAN",sourceUrl:"https://www.audit.gov.my",tags:"audit",status:"ARCHIVED"},
{title:"Pelan Digital Johor",category:"Pelan Strategik",institution:"Kerajaan Negeri Johor",state:"Johor",year:2026,author:"UPEN Johor",summary:"Digital",source:"Johor",sourceUrl:"https://www.johor.gov.my",tags:"digital",status:"PUBLISHED"},
];

async function main(){
 await prisma.knowledgeRelation.deleteMany();
 await prisma.knowledgeVersion.deleteMany();
 await prisma.knowledgeAttachment.deleteMany();
 await prisma.knowledgeAsset.deleteMany();
 await prisma.knowledgeAsset.createMany({data:assets.map(createAsset)});
 console.log(`Seed selesai. ${assets.length} rekod.`);
}

main().catch(console.error).finally(()=>prisma.$disconnect());
