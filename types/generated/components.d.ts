import type { Schema, Struct } from '@strapi/strapi';

export interface CommitteeComponentsCommitteeMember
  extends Struct.ComponentSchema {
  collectionName: 'components_committee_components_committee_members';
  info: {
    displayName: 'Committee Member';
    icon: 'user';
  };
  attributes: {
    committeePosition: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    person: Schema.Attribute.Relation<'oneToOne', 'api::person.person'>;
    roleDescription: Schema.Attribute.Text;
  };
}

export interface ServiceComponentsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_service_components_features';
  info: {
    displayName: 'Features';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface ServiceComponentsServiceFeature
  extends Struct.ComponentSchema {
  collectionName: 'components_service_components_service_features';
  info: {
    displayName: 'Service Feature';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'committee-components.committee-member': CommitteeComponentsCommitteeMember;
      'service-components.features': ServiceComponentsFeatures;
      'service-components.service-feature': ServiceComponentsServiceFeature;
    }
  }
}
