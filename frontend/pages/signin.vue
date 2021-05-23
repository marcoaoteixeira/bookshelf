<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="3">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          class="mb-4"
        />
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.min]"
          :type="showPassword ? 'text' : 'password'"
          name="input-10-1"
          label="Senha"
          hint="No mínimo 6 caracteres."
          class="mb-4"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-checkbox
          v-model="rememberMe"
          label="Lembrar na próxima vez?"
          class="mb-4"
        ></v-checkbox>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mt-2"
          large
          @click="validate"
        >
          Entrar
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  auth: false,

  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail é obrigatório',
      (v) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
    ],
    password: '',
    passwordRules: {
      required: (v) => !!v || 'Senha é obrigatória',
      min: (v) => v.length > 5 || 'Senha deve conter ao menos 6 caracteres',
    },
    showPassword: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
