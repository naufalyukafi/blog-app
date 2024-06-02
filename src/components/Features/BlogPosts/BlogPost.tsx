import Link from 'next/link'
import { ButtonBase, Card, Stack, Typography } from '@mui/material'
import { Article } from '@/type/article'

export default function ArticleCard({ data }: { data: Article }) {
    return (
        <Card component='article' sx={{ height: 1 }} className="hover:shadow-2xl">
            <ButtonBase component={Link} href={`articles/${data.id}?user_id=${data.user_id}`} sx={{
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'unset',
                alignContent: 'unset',
                alignItems: 'unset',
                gap: 2,
                p: 2,
                width: 1
            }}>

                <Stack sx={{
                    gap: 2
                }}>
                    <Stack>
                        <Typography variant='h2' className='line-1 font-roboto text-[#00626C]' sx={{ fontSize: 14, marginBottom: 2, fontWeight: 600 }}>{data.title}</Typography>
                        <Typography variant='body2' className='line-1 text-[#6C737F]' sx={{ fontSize: 12 }}>
                            {data.body.length > 120 ? `${data.body.slice(0, 120)}...` : data.body}
                        </Typography>
                    </Stack>
                </Stack>

            </ButtonBase>
        </Card>
    )
}