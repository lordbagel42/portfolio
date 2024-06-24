<script lang="ts">
	import '../app.css';
</script>

<nav class="navbar bg-base-100" aria-label="Main Navigation">
	<div class="navbar-start"> <!-- hidden on large screens -->
		<div class="dropdown">
			<button tabindex="0" class="btn btn-ghost lg:hidden" aria-label="Toggle Menu">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</button>
			<ul
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				aria-hidden="true"
				aria-label="Menu"
			>
				<li><a href="/about">about me</a></li>
				<li>
					<button aria-haspopup="true" aria-expanded="false">projects</button>
					<ul class="p-2">
						<li><a href="/projects">overview</a></li>
						<li><a href="/projects/bagelindustries">bagelindustries</a></li>
						<li><a href="/">project 2</a></li>
					</ul>
				</li>
				<li><a href="/">other thing</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl">sylviethedev</a>
	</div>
	<div class="navbar-center hidden lg:flex"> <!-- hidden on small screens -->
		<ul class="menu menu-horizontal px-1">
			<li><a href="/about">about me</a></li>
			<li><a href="/">other thing</a></li>
			<li>
				<details>
					<summary>projects</summary>
					<ul class="p-2">
						<li><a href="/projects">overview</a></li>
						<li><a href="/projects/bagelindustries">bagelindustries</a></li>
						<li><a href="/">project 2</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
	<div class="navbar-end"> <!-- always shown -->
		<button class="btn">thing</button>
	</div>
</nav>
<slot />
