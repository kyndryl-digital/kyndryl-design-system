import { html, LitElement, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { PREFIX_TAG } from '../../global/settings/settings';
import '../icon/icon';
import stylesheet from './navItem.scss';


@customElement(`${PREFIX_TAG}-nav-item`)
export class NavItem extends LitElement {
  static styles = [stylesheet];

  @property({ type: Boolean , reflect: true }) selected = false;
  @property({ type: Boolean , reflect: true }) hasIcon = false;
  @property({ type: Boolean , reflect: true }) hasHoverEffect = false;
  @property({ type: Boolean , reflect: true }) dense = false;

  render() {
    return html`
      <slot></slot>

      ${this._getTrailingIconTemplate()}
    `;
  }

  protected _getTrailingIconTemplate(): TemplateResult{
    if(!this.hasIcon){
      return;
    }

    return html`
      <span class="nav-item--icon">
        <kd-icon class="down-arrow" icon="${this.selected ? 'chevron-up' : 'chevron-down'}"></kd-icon>
      </span>
    `;
  }

}