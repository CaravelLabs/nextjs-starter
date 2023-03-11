/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    modularizeImports: {
        '@mui/material': {
            transform: '@mui/material/{{member}}',
        },
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
    },
}
