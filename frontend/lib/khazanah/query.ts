import { Prisma } from "@prisma/client";

type BuildKhazanahQueryParams = {
  keyword?: string;
  category?: string;
  status?: string;
  state?: string;
  year?: string;
  sort?: string;
};

export function buildKhazanahQuery({
  keyword = "",
  category = "",
  status = "",
  state = "",
  year = "",
  sort = "",
}: BuildKhazanahQueryParams) {
  const where: Prisma.KnowledgeAssetWhereInput = {
    ...(keyword && {
      OR: [
        {
          title: {
            contains: keyword,
                      },
        },
        {
          summary: {
            contains: keyword,
                      },
        },
        {
          author: {
            contains: keyword,
                   },
        },
        {
          tags: {
            contains: keyword,
                      },
        },
      ],
    }),

    ...(category && {
      category,
    }),

    ...(status && {
      status,
    }),

    ...(state && {
      state,
    }),

    ...(year && {
      year: Number(year),
    }),
  };

  let orderBy: Prisma.KnowledgeAssetOrderByWithRelationInput;

  switch (sort) {
    case "oldest":
      orderBy = {
        createdAt: "asc",
      };
      break;

    case "title-asc":
      orderBy = {
        title: "asc",
      };
      break;

    case "title-desc":
      orderBy = {
        title: "desc",
      };
      break;

    case "year-desc":
      orderBy = {
        year: "desc",
      };
      break;

    case "year-asc":
      orderBy = {
        year: "asc",
      };
      break;

    default:
      orderBy = {
        createdAt: "desc",
      };
  }

  return {
    where,
    orderBy,
  };
}