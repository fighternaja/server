import type { Schema, Struct } from '@strapi/strapi';

export interface BlockRichtext extends Struct.ComponentSchema {
  collectionName: 'components_block_richtexts';
  info: {
    displayName: 'richtext';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface BlockSpoiler extends Struct.ComponentSchema {
  collectionName: 'components_block_spoilers';
  info: {
    displayName: 'spoiler';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlockTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_block_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.richtext': BlockRichtext;
      'block.spoiler': BlockSpoiler;
      'block.testimonial': BlockTestimonial;
    }
  }
}
