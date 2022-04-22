import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings';
import stylesheet from './contentBandContainer.scss';

@customElement(`${PREFIX_TAG}-content-band-container`)
export class kdContentBandContainer extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) title;
  @property({ type: String }) titleSize;
  @property({ type: String }) titleCtaLink;
  @property({ type: String }) titleCtaTarget;
  @property({ type: String }) titleCtaLabel;
  @property({ type: String }) titleCtaIcon;
  @property({ type: String }) columnLayout = '2';
  @property({ type: String }) theme = '';


  protected _renderTitle(): TemplateResult | string | void {
    switch (this.titleSize) {
    case 'h2':
      return html`<h2 class="${PREFIX_CLASS}-content-band-container__title ${PREFIX_CLASS}-h2">${this.title}</h2>`;
    case 'h3':
      return html`<h3 class="${PREFIX_CLASS}-content-band-container__title ${PREFIX_CLASS}-h3">${this.title}</h3>`;
    case 'h4':
      return html`<h4 class="${PREFIX_CLASS}-content-band-container__title ${PREFIX_CLASS}-h4">${this.title}</h4>`;
    case 'h5':
      return html`<h5 class="${PREFIX_CLASS}-content-band-container__title ${PREFIX_CLASS}-h5">${this.title}</h5>`;
    case 'h6':
      return html`<h6 class="${PREFIX_CLASS}-content-band-container__title ${PREFIX_CLASS}-h6">${this.title}</h6>`;
    case 'h1':
    default:
      return html`<h1 class="${PREFIX_CLASS}-content-band-container__title ${PREFIX_CLASS}-h1">${this.title}</h1>`;
    }
  }

  protected _renderCta(): TemplateResult | string | void {
    if (this.titleCtaLink) {
      return html`
        <div class="${PREFIX_CLASS}-content-band-container__action-container">
          <kd-button
            icon=${this.titleCtaIcon}
            href=${this.titleCtaLink}
            target=${this.titleCtaTarget}
          >${this.titleCtaLabel}</kd-button>
        </div>
      `;
    }

    return null;
  }

  render() {
    return html`
      <div class="${PREFIX_CLASS}-content-band-container ${this.theme}">
        <div class="${PREFIX_CLASS}-content-band-container__header">
          <div class="${PREFIX_CLASS}-content-band-container__desc-container">
            ${this._renderTitle()}
            <div class="${PREFIX_CLASS}-content-band-container__description">
              <slot name="description"></slot>
            </div>
          </div>
          ${this._renderCta()}
        </div>
        <div class="${PREFIX_CLASS}-content-band-container__bottom ${PREFIX_CLASS}-content-band-container__bottom--${this.columnLayout}-col">
          <slot></slot>
        </div>
      </div>
    `;
  }
}