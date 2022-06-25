const path = require('path');

const isBuild = process.env.NODE_ENV === 'production';

const withImages = require('next-images');

module.exports = withImages({
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    localIdentName: isBuild ? '[hash:base64:5]' : '[local]-[hash:base64:5]',
  },
  images: {
    disableStaticImages: true,
  },
});
