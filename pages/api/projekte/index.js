// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mariadb = require('mariadb');

import config from '../../../config';

import prisma from '../../../lib/prisma.tsx';

export default async function handler(req, res) {
    //console.log(process.env.DATABASE_URL);

    const marker_aktuelles = await prisma.marker_aktuelles.findMany();

    //const feed = await prisma.post.findMany();

    console.log('prisma feed', marker_aktuelles);

    return res.status(200).json(marker_aktuelles);
}
