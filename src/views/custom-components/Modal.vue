<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        :style="style"
      >
        <header
          class="modal-header"
          id="modalTitle"
           v-if="hasHeader"
        >
          <slot name="header">
              {{ headerTitle }}
          </slot>
          <app-button
          v-if="hasHeaderClose"
          class="a-btn a-btn--th-accent"
          theme="white"
          @click="close"
          >x</app-button>
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            This is the default body!
          </slot>
        </section>

        <footer class="modal-footer" v-if="hasFooter">
          <slot name="footer">

          </slot>
          <div class="d-flex modal-btn-group">
              <app-button
              v-if="hasFooterClose"
              class="a-btn a-btn--th-accent a-btn--fl  float-right"
              theme="white"
              @click="close(); $emit('cancel')">
                {{ cancelBtnTitle }}
              </app-button>
                <app-button
                class="a-btn a-btn--th-accent a-btn--fl"
                @click="$emit('ok')">
                    {{ okBtnTitle }}
                </app-button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>
<!-- stil va custom taglani o'zgartirish kerak -->
<!-- usage -->
<!-- <template v-slot:header>
    This is a new modal header.
  </template>

  <template v-slot:body>
    This is a new modal body.
  </template>

  <template v-slot:footer>
    This is a new modal footer.
  </template> -->
<script>
import AppButton from '@/components/shared-components/AppButton';

  export default {
      name: 'Modal',
      props: {
          hasFooter: {
              type: Boolean,
              default: true
          },
          hasHeader: {
              type: Boolean,
              default: true
          },
          headerTitle: {
              type: String,
              default: 'Header'
          },
          cancelBtnTitle: {
              type: String,
              default: 'Отмена'
          },
          okBtnTitle: {
              type: String,
              default: 'Добавить'
          },
          hasHeaderClose: {
              type: Boolean,
              default: true
          },
          hasFooterClose: {
              type: Boolean,
              default: true
          },
          width: {
              type: [Number, String],
              default: 513
          },
          height: {
              type: [Number, String],
              default: 242
          },
          radius: {
			type: [String, Number],
			default: 8
		},
      },
      components: {
          AppButton
      },
    methods: {
      close() {
        this.$emit('close');
      },
      checkStyles(style) {
        return (style === 'initial' || style === 'inherit' || style === 'auto' || style === 'none' || (typeof style === 'string' && style.includes('%'))) ?
            style : style + 'px';
      }
    },
    computed: {
        style() {
			return {
				'height': this.checkStyles(this.height),
                'width': this.checkStyles(this.width),
                'border-radius': this.checkStyles(this.radius)
			};
		}
    }
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    padding: 30px;
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    top:auto
  }

  .modal-header,
  .modal-footer {
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #101312;
    justify-content: space-between;
  }

  .modal-footer {
    /* border-top: 1px solid #eeeeee; */
    flex-direction: column;
    padding-top: 30px;
    border-top: none;
    padding-top: 0;
  }

  .modal-body {
    position: relative;
    overflow-y: unset !important;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #FFE600;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #FFE600;
    border: 1px solid #FFE600;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>
