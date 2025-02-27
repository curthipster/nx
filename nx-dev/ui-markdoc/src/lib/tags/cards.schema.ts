import { Schema } from '@markdoc/markdoc';

export const cards: Schema = {
  render: 'Cards',
  attributes: {},
};

export const card: Schema = {
  render: 'Card',
  attributes: {
    title: {
      type: 'String',
      required: true,
    },
    description: {
      type: 'String',
      default: '',
    },
    type: {
      type: 'String',
      default: 'documentation',
    },
    url: {
      type: 'String',
      default: '',
    },
  },
};
